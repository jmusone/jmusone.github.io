import { Card, Text, Button, Group, Title } from '@mantine/core';

export function WorkCard({ project } : { project:any }) {
    function openFrontendLink() {
        window.open(project.FrontendLink, '_blank', 'noopener,noreferrer')
      }

      function openBakendLink() {
        window.open(project.BackendLink, '_blank', 'noopener,noreferrer')
      }

    return(
        <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section withBorder inheritPadding py="xs">
            <Title order={3}>{project.Name}</Title>
        </Card.Section>
  
        <Group justify="space-between" mt="md" mb="xs">
          
        </Group>
  
        <Text size="sm" c="dimmed">
          { project.Description }
        </Text>
  
        <Button color="blue" fullWidth mt="md" radius="md" onClick={openFrontendLink}>
          { project.FrontendButtonText }
        </Button>
        <Button color="blue" fullWidth mt="md" radius="md" onClick={openBakendLink}>
          { project.BackendButtonText }
        </Button>
      </Card>
    );
}