const PagePlaceholder = ({ title, description }) => {
  return (
    <main className="min-h-screen bg-app-bg px-5 py-6 text-text-main">
      <div className="mx-auto w-full max-w-sm">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="mt-2 text-[12px] leading-5 text-text-muted">
          {description}
        </p>
      </div>
    </main>
  )
}

export default PagePlaceholder
