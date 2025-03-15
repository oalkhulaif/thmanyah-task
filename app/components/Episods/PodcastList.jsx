import ScrollablePodcastList from "./ScrollablePodcastList";

async function getEpisodes() {
    const response = await fetch(
        "https://api.dev.library.servers8.com/v2/search?query=business&type=episode&from=0&size=10",
        { next: { revalidate: 300 } }
    );
    const data = await response.json();

    return Array.isArray(data.data) ? data.data : [];
}

export default async function PodcastList() {
    const episodes = await getEpisodes();

    return (
        <div>
            <h1 className="font-bold m-[6px] text-center" style={{ fontSize: "2.2rem" }}>
                🎙️ أحدث الحلقات
            </h1>

            <ScrollablePodcastList episodes={episodes} />
        </div>
    );
}
