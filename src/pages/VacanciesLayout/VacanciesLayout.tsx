
import {Outlet, useLocation, useNavigate} from 'react-router';
import {Autocomplete, Button, Container, Divider, Grid, Group, Stack, Text, Title, Tabs} from '@mantine/core';
import { JobFilters } from '../../components/JobFilters/JobFilters';
import classes from "@/pages/JobsPage/JobsPage.module.scss";
import {useJobsFilters} from "@/hooks/useJobsFilters.ts";
import {IconSearch} from "@tabler/icons-react";
import {useEffect, useMemo, useState} from "react";
import {useDebouncedValue} from "@mantine/hooks";
import {useGetJobsQuery} from "@/store/jobs/jobsApi.ts";

export function VacanciesLayout() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const activeTab = pathname.startsWith('/vacancies/petersburg')
        ? 'petersburg'
        : 'moscow';

    const {filters, setSearch} = useJobsFilters();
    const [searchValue, setSearchValue] = useState(filters.search);
    const [debouncedSearch] = useDebouncedValue(searchValue, 500);
    const {data} = useGetJobsQuery(filters);

    useEffect(() => {
        setSearchValue(filters.search);
    }, [filters.search]);

    const handleSearch = () => {
        setSearch(searchValue);
    };

    const suggestions = useMemo(() => {
        if (!data?.jobs || !debouncedSearch.trim()) {
            return [];
        }
        return [
            ...new Set(
                data.jobs.flatMap((job) => [
                    job.name,
                    job.company_name,
                ]),
            ),
        ];
    }, [data?.jobs, debouncedSearch]);

    const handleSearchOption = (value: string) => {
        setSearchValue(value);
        setSearch(value);
    };

    const handleTabChange = (value: string | null) => {
        if (!value) return;

        const nextPath = `/vacancies/${value}`;
        navigate({
            pathname: nextPath,
            search: location.search,
        });
    };

    return (
        <Container size="md" className={classes.container}>
            <Stack gap="sm">
                <Stack gap="md">
                    <div className={classes.wrapper}>
                        <Group justify="space-between">
                            <Group gap="sm" wrap='wrap' align="start" className={classes.wraptitle}
                                   style={{flexDirection: 'column'}}>
                                <Title order={2} fw={700} className={classes.title} c="#000000">
                                    Список вакансий
                                </Title>
                                <Text c="#0F0F1080">
                                    по профессии Frontend-разработчик
                                </Text>
                            </Group>
                            <Group align="flex-start" gap="8">
                                <Autocomplete
                                    placeholder="Должность или название компании"
                                    leftSection={<IconSearch size={16} />}
                                    data={suggestions}
                                    value={searchValue}
                                    onChange={setSearchValue}
                                    onOptionSubmit={handleSearchOption}
                                />
                                <Button type="submit" onClick={handleSearch}>Найти</Button>
                            </Group>
                        </Group>
                    </div>
                </Stack>
                <Divider style={{marginLeft: 'calc(50% - 49vw)', marginRight: 'calc(50% - 49vw)'}}/>
                <Grid>
                    <Grid.Col span={4}><JobFilters/></Grid.Col>
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        <Tabs value={activeTab}  onChange={handleTabChange}>
                            <Tabs.List mb="md">
                                <Tabs.Tab value="moscow">Москва</Tabs.Tab>
                                <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
                            </Tabs.List>
                            <Outlet />
                        </Tabs>
                    </Grid.Col>
                </Grid>
            </Stack>
        </Container>
    );
}
