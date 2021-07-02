import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="2" textAlign="right">
          <Text>Lorena Sabino</Text>
          <Text color="gray.300" fontSize="small">
            hi@lorenasg.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lorena Sabino"
        src="https://avatars.githubusercontent.com/u/884768?v=4"
      />
    </Flex>
  );
}
