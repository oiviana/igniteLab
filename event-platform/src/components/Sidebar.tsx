import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";
import { NavContext } from '../context/NavContext';


//Query das Lessons
const GET_LESSONS_QUERY = gql`
query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    slug
    title
  }
}
`
//Tipagem do retorno da query das Lessons
interface LessonsQueryResponse{
    lessons:{
        id: string;
        title: string;
        slug: string;
        availableAt: string;
        lessonType: 'class' | 'live'
    }[]
}

export function Sidebar() {
    const {data} = useQuery<LessonsQueryResponse>(GET_LESSONS_QUERY) //Hook de query do Apollo
    const  {mobNav} = useContext(NavContext);

    return (
        <>
             <aside className={`hidden md:block top-16 min-w-full md:min-w-[280px]  md:top-0 md:w-[280px] lg:w-[340px]  bg-gray-700 p-6 border-l border-gray-600`}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de Aulas
            </span>

            <div className="flex flex-col gap-8">
             {data?.lessons.map(lesson=>{
                return(
                    <Lesson
                    key={lesson.id}
                    title={lesson.title}
                        slug={lesson.slug}
                    avaliableAt={new Date(lesson.availableAt)}
                    type={lesson.lessonType}
                />
                );
             })}
            </div>
        </aside>
        <aside className={`${mobNav ? ('absolute'):(' hidden')} md:hidden top-16 min-w-full md:min-w-[280px]  md:top-0 md:w-[280px] lg:w-[340px]  bg-gray-700 p-6 border-l border-gray-600`}>
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de Aulas
            </span>

            <div className="flex flex-col gap-8">
             {data?.lessons.map(lesson=>{
                return(
                    <Lesson
                    key={lesson.id}
                    title={lesson.title}
                        slug={lesson.slug}
                    avaliableAt={new Date(lesson.availableAt)}
                    type={lesson.lessonType}
                />
                );
             })}
            </div>
        </aside>
        </>
    );
}