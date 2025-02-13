import { Title, Text, Paper } from "@mantine/core";

export function AboutMe() {
    return(
        <Paper shadow="sm" p="xl" withBorder>
            <Title order={3}>Hi, I'm Jacob! 👋</Title>
            <Text>
                My name is Jacob Musone. I currently work for PNC's Assest Management Group as a full stack software engineer, specializing in Spring Boot and Angular. I also contribute to Corner Case Solutions, a local technology group producing software solutions for non-profit and philanthropic organizations.
            </Text>
        </Paper>
    );
}