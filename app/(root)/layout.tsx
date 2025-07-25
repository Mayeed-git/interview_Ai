import React, {ReactNode} from 'react'
import Link from "next/link";
import Image from "next/image";

const RootLayout = ({children}:{children:ReactNode}) => {
    return (
        <div className="root-layout">
            <nav>
                <Link href='/' className="flex intems-center gap-2">
                   <Image src="/logo.svg" alt="Logo" width={38} height={32} />
                    <h2 className="text-primary-100">InterviewAi</h2>
                </Link>
            </nav>

            {children}
        </div>
    )
}
export default RootLayout
