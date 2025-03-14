import Header from "./components/Header";
import Banner from "./components/Banner";
import PodcastList from "./components/PodcastList";
import ProgramsList from "./components/ProgramsList";


export default function Home() {
  return (
    <div>
      <Banner />
      <PodcastList />
      <ProgramsList />
    </div>
  );
}
