export default function FloatingMenu() {
    return (
        <section className="fixed bottom-8 left-1/2 -translate-x-1/2 max-h-16 p-2 bg-black/30 backdrop-blur-2xl flex gap-2 rounded-2xl text-xl/tight">
            <div className="bg-amber-50 rounded-lg px-2 py-1 tracking-tighter">ITEM</div>
            <div className="bg-amber-50 rounded-lg px-2 py-1 tracking-tighter">ITEM</div>
            <div className="bg-amber-50 rounded-lg px-2 py-1 tracking-tighter">ITEM</div>
        </section>
    )
}