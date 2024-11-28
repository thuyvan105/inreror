import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'

 
function CustomLoading({loading}) {
    return (
        <AlertDialog open={loading}>
            <AlertDialogContent>
            <AlertDialogTitle> </AlertDialogTitle> 
                <div className="bg-white flex flex-col items-center my-10 justify-center">
                    <Image src = {'/loading.gif'} alt='loading'
                    width={150}
                    height={150}/>
                    <h2>Redesiging your room...Do not Refresh</h2>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CustomLoading