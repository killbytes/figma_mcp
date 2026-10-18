import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from 'react-router';
import {JobsPage} from './pages/JobsPage/JobsPage';
import {VacancyPage} from './pages/VacancyPage/VacancyPage';
import {Layout} from "@/Layout.tsx";
import {VacanciesLayout} from "@/pages/VacanciesLayout/VacanciesLayout.tsx";
import {ErrorPage} from "@/pages/ErrorPage/ErrorPage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route errorElement={<ErrorPage />}>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/vacancies/moscow" replace />} />
                    <Route path="vacancies" element={<VacanciesLayout />}>
                        <Route index element={<Navigate to="moscow" replace />} />
                        <Route path=":city" element={<JobsPage />} />
                    </Route>
                    <Route path="vacancies/:id" element={<VacancyPage />} />
                </Route>
            </Route>

            <Route
                path="*"
                loader={() => {
                    throw new Response(
                        JSON.stringify({
                            message: 'Страница не найдена',
                            reason: 'Указан несуществующий адрес',
                        }),
                        {
                            status: 404,
                            statusText: 'Not Found',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        },
                    );
                }}
                errorElement={<ErrorPage />}
            />
        </>,
    ),
    {
        basename: '/529_job_site',
    },
);