import PostCard from './components/PostCard'

const HomePage = () => {
  return (
    <main className="grid h-screen justify-center gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  )
}

export default HomePage
