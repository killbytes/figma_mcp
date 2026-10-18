import {Stack} from '@mantine/core';
import {SkillsInput} from '../SkillsInput/SkillsInput';
import { useJobsFilters } from '../../hooks/useJobsFilters';
import classes from './JobFilters.module.scss';

export function JobFilters() {
    const { filters, setSkills } = useJobsFilters();
    return (
        <Stack gap="md" className={classes.filters}>
            <Stack
                bg="white"
                p="md"
                style={{ borderRadius: 8 }}
            >
                <SkillsInput
                    skills={filters.skills}
                    onChange={setSkills}
                />
            </Stack>
        </Stack>
    );
}
