import Header from "./components/Header/Header";
import Banner from "./components/Banner";
import PodcastList from "./components/Episods/PodcastList";
import ShowsList from "./components/Shows/ShowsList";

export default function Home() {
  return (
    <div>
      <Banner />
      <PodcastList />
      <ShowsList />
    </div>
  );
}
