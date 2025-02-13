import { Container, SimpleGrid, Stack, Title } from "@mantine/core";
import { WorkCard } from "@/components/WorkCard/WorkCard";
import { AboutMe } from "@/components/AboutMe/AboutMe";

export function HomePage() {
  const personalProjects = [
    {
      id: 1,
      Name: "InventQry",
      Description: "IventQry is a inventory solution for local non-profit organizations. Originally made as a substitution to using an excel spreadsheet, the software is used by homeless shelters, community centers, and historical societies in the Pittsburgh area.",
      FrontendLink: "https://github.com/CornerCaseSolutions/ccs-inventory-management-ui",
      BackendLink: "https://github.com/CornerCaseSolutions/ccs-inventory-management-api",
      FrontendButtonText: "Check out the website code!",
      BackendButtonText: "Check out the WebFlux code!"
    },
    {
      id: 2,
      Name: "PGH Rec Sports Bot",
      Description: "This is a discord bots that tracks games for recreational sports team on the Pittsburgh Sports League website. Given a team, the API will use a web scraper to fetch information, such as when games are. The Discord bot connects to the API for ease of use.",
      FrontendLink: "https://github.com/jmusone/prs_scheduler_bot",
      BackendLink: "https://github.com/jmusone/prs_scheduler_api",
      FrontendButtonText: "Check out the bot code!",
      BackendButtonText: "Check out the Django code!"
    }
  ]

  return (
    <Container fluid>
      <Stack
        align="stretch"
        justify="flex-start"
        gap="sm"
      >
       <AboutMe /> 
       <Title order={3}>My Work</Title>
        <SimpleGrid cols={3} spacing={"xl"}>
          {personalProjects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
