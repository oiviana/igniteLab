import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event() {
    // Este componente renderiza a "main" da aplicação, trazendo os demais componentes

    const {slug} = useParams<{slug: string}>();
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-auto md:flex-1 ">
                {slug ? <Video lessonSlug={slug}/> : <div className="flex-1"></div>}
                <Sidebar />
            </main>
        </div>
    );
}