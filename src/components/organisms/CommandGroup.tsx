import { Box, Heading, Table, Tbody, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { Command } from '../../graphql/generated/types';
import { ThGrayBorder } from '../atoms/ThGrayBorder';
import { CommandInfo } from '../molecules/CommandInfo';

interface ICommandGroupProps {
  category: string;
  commands: Command[];
}

export const CommandGroup: React.FC<ICommandGroupProps> = ({
  category,
  commands,
}) => (
  <Box color="whiteAlpha.800" paddingBottom={{ base: 8, md: 12 }}>
    <Heading textAlign={{ base: `center`, md: `right` }} fontWeight="hairline">
      {category}
    </Heading>
    <Table size="md">
      <Thead>
        <Tr display={{ base: `none`, md: `table-row` }}>
          <ThGrayBorder>Command</ThGrayBorder>
          <ThGrayBorder>Wat it do</ThGrayBorder>
          <ThGrayBorder>Aliases</ThGrayBorder>
        </Tr>
      </Thead>
      <Tbody>
        {commands.map((command) => (
          <CommandInfo key={command.id} command={command} />
        ))}
      </Tbody>
    </Table>
  </Box>
);
