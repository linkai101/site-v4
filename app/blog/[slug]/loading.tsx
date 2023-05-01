
export default function BlogPostLoading() {
  return (
    <div className="px-6 pt-20 pb-6 container max-w-4xl">
      <div className="flex items-end gap-4">
        <div className="w-12 h-12 bg-theme-surface rounded-lg animate-pulse"/>
        <div className="h-8 w-1/2 bg-theme-surface rounded-lg animate-pulse mb-1"/>
      </div>

      <div className="h-4 w-40 bg-theme-surface rounded-md animate-pulse mt-3.5"/>

      <div className="h-4 w-full bg-theme-surface rounded-md animate-pulse mt-12"/>
      <div className="h-4 w-1/3 bg-theme-surface rounded-md animate-pulse mt-2.5"/>
    </div>
  );
}
