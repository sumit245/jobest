'use client'
import Modal from '@/component/modal'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function SignIn() {
    const router = useRouter()

    return (
        <Modal>
            <span onClick={() => router.back()}>Close modal</span>
            <h1>Sign in</h1>
        </Modal>
    )
}
