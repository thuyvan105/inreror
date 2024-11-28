import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";
import { storage } from "/config/firebaseConfig";
import { db } from "@/config/db";
import { AiGeneratedImage } from "@/config/schema";
import axios from "axios";

const replicate = new Replicate({
  auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
});

export async function POST(req) {
  const { imageUrl, roomType, designType, additionalReq, userEmail } = await req.json();

  try {
    const input = {
      image: imageUrl,
      prompt: `A ${roomType} with a ${designType} style interior ${additionalReq}`
    };

    const output = "https://replicate.delivery/pbxt/yN2T4r3fezgj40xw1a9uVQrSyBEe2ncBu6BpmetKMwXTh7UPB/out.png";

    // const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
    // console.log(output)
    // return NextResponse.json({result: output });

    // Convert output url to base64 image
    const base64Image = await ConvertImageToBase64(output);

    // Save base64 to firebase
    const fileName = Date.now() + '.png';
    const storageRef = ref(storage, 'room-design/' + fileName);
    await uploadString(storageRef, base64Image, 'data_url');
    const downloadUrl = await getDownloadURL(storageRef);
    console.log(downloadUrl);

    // Save all to database
    const dbResult = await db.insert(AiGeneratedImage).values({
      roomType: roomType,
      designType: designType,
      orgImage: imageUrl,
      aiImage: downloadUrl,
      userEmail: userEmail
    }).returning({ id: AiGeneratedImage.id });

    console.log(dbResult);
return NextResponse.json({ 'result': downloadUrl });

} catch (e) {
    console.error("Error from Replicate:", e);
    return NextResponse.json({ error: e.message });
  }
}

async function ConvertImageToBase64(imageUrl) {
  const resp = await axios.get(imageUrl, { responseType: "arraybuffer" });
  const base64ImageRaw = Buffer.from(resp.data).toString("base64");
  return "data:image/png;base64," + base64ImageRaw;
}
