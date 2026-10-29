import Hero from './sections/Hero'
import Overview from './sections/Overview'
import Learning from './sections/Learning'
import Engines from './sections/Engines'
import Compare from './sections/Compare'
import Video from './sections/Video'
import Reading from './sections/Reading'
import Manga from './sections/Manga'
import Usage from './sections/Usage'
import Trust from './sections/Trust'
import Cta from './sections/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Manga />
      <Reading />
      <Video />
      <Learning />
      <Compare />
      <Engines />
      <Usage />
      <Trust />
      <Cta />
    </>
  )
}
