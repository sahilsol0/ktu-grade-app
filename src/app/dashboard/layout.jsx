import DashboardHeader from "../components/DashboardHeader"
import FloatingMenu from "../components/FloatingMenu"

export default function DashboardLayout({children}) {
    return (
        <>
            <DashboardHeader />
            <main className="px-12">
                {children}
            </main>
            <FloatingMenu />
        </>
    )
}