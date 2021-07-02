import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { theme } from '../styles/theme';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-06-30T00:00:00.000Z',
      '2021-07-01T00:00:00.000Z',
      '2021-07-02T00:00:00.000Z',
      '2021-07-03T00:00:00.000Z',
      '2021-07-04T00:00:00.000Z',
      '2021-07-05T00:00:00.000Z',
      '2021-07-06T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
    },
  },
};

const series = [{ name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth={320} align="flex-start">
          <Box p={['6', '8']} bg="gray.700" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={['6', '8']} bg="gray.700" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
