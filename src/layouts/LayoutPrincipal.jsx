import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../componentes/navbar";
import { Footer } from "../componentes/Footer";
import Modal from "../componentes/Modal";
import { LoginForm } from "../componentes/LoginForm";

export default function LayoutPrincipal() {
    const [loginOpen, setLoginOpen] = useState(false);

    return (
        <div className="min-h-dvh flex flex-col bg-gray-50 text-gray-900">
            <Navbar onOpenLogin={() => setLoginOpen(true)}/>
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />

            <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
                <LoginForm onSuccess={() => setLoginOpen(false)} />
            </Modal>

        </div>
    );
}
