import Link from "next/link"
const NavigationBar = () => {
    return <div className="flex justify-center [&>*]:px-6 [&>*]:outline [&>*]:outline-white [&>*]:rounded-xl [&>*]:mx-4 [&>*]:mt-3">
        <Link href="/shop">Shop</Link>
        <Link href="/auth">Auth</Link>
        <Link href="/">Todos</Link>
    </div>
}

export default NavigationBar