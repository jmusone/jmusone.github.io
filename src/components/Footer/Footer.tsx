import { Group } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconMailbox } from '@tabler/icons-react';

export function Footer() {
  function openLinkedin() {
    window.open('https://www.linkedin.com/in/jacobmusone/', '_blank', 'noopener,noreferrer')
  }

  function openGithub() {
    window.open('https://github.com/jmusone', '_blank', 'noopener,noreferrer')
  }

  function sendMail() {
    window.location.href = 'mailto:jacobpmusone@gmail.com'
  }

    return(
        <Group 
            justify="flex-end" 
            gap="sm" 
            align='center' 
            p={5}
        >
            <IconMailbox onClick={sendMail}/>
            <IconBrandGithub onClick={openGithub} />
            <IconBrandLinkedin onClick={openLinkedin} />
        </Group>
    )
}