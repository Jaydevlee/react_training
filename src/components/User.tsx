export default function User({ title, children }: { title: string; children: React.ReactNode; }) {
    return (
        <>
            <p>{title}</p>
            {children}
        </>
    )
}