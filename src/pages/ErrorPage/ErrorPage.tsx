import {Button, Container, Group, Paper, Stack, Text, Title} from '@mantine/core';
import {useNavigate} from 'react-router';
import sadCat from "@/shared/assets/sadcat1.png";

export function ErrorPage() {
    const navigate = useNavigate();
    return (
        <Container size="lg" py="xl">
            <Paper radius="lg" p="xl" bg="gray.1">
                <Group justify="space-between" align="center" wrap="nowrap">
                    <Stack gap="xs">
                        <Title order={2} c="#000000" >Упс! Такой страницы не существует</Title>
                        <Text c="dimmed" ta="left">Давайте перейдём к началу.</Text>
                    </Stack>
                    <Button onClick={() => navigate('/vacancies/moscow')}>
                        К списку вакансий
                    </Button>
                </Group>
                <img style={{marginTop: "20px"}} src={sadCat} alt="cat"/>
            </Paper>
        </Container>
    );
}
