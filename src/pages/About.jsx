import { ReactNode } from 'react';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
    SimpleGrid,
  VStack
} from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={'cover'}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={'absolute'}
        width={'50%'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'90vw'} zIndex={10} position={'relative'} >
        <Stack direction={{ base: 'column', lg: 'row' }} ml={{base:'0',lg:'30vw'}}  >
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
                      py={{ base: 4, md: 20, xl: 10 }}>
                      {/* <Heading fontSize={'5rem'} color='white' fontWeight={'extrabold'} mt='-30%'>About Us</Heading> */}
                      {/* <hr /> */}
                      
            <Box  mb={{ base: 8, md: 20 }} >
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'4em'}
                color={'white'}>
                About Us
                          </Text>
                          <hr />
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}>
                Technology
              </Text>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                21st century firm
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                The NewLife™ technology allows you to monitor your crops and get
                complete insights at real time. The proprietary
                software/hardware ecosystem prevents your plants from getting
                neglected.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
              </Stack>
              <Box color={'white'}   >
                 <VStack alignItems={"baseline"} wrap='wrap' fontSize={'2xl'}>
                      <Text mb={'2%'} >
                        STCO is run by some of the best professionals of India. The firm excels in providing services for Financial Advisory, Audits, Income Tax, GST consultations.
                      </Text>
                     <Text mb={'2%'}>
                      
                        STCO has had a long and prestigious history with modern firm outlook. We are a specialized professional services firm of very experienced senior chartered accountants, Big 4 alumni and industry executives. Since the firm’s formation, STCO has prided itself on values such as competency, professionalism, responsibility and accountability, honesty, integrity and dedication, values which have been critical to our continued growth and success.
                     </Text>
                  
                     <Text mb={'2%'}>
                      
                          An era of expansion began in early 90’s with Globalization which saw India emerge on a global platform.   STCO evolved with this growth and today it stands with more than work force of more than 150 individuals and seven offices, catering to domestic, national and transnational organization needs. Our team comprising of professionals, work on daily basis to provide our client with value added services in the areas of audit, tax, accounting consultancy, litigation support, startup services. STCO is a team of big brains helping financial executives with their most complex and significant matters, including Financial Accounting and Operations, IPO Services, and M&A Services. We support our clients in growth as they change the world!
                      </Text>
                      <Text >

                         Our goal at STCO is to be the most respected and highest quality firm across all of our service lines. We are hired by finance and accounting executives who understand the importance of leveraging their time as well as having a partner that can successfully execute their needs.
                      
                      </Text>
                    </VStack>
              </Box>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '10+',
    content: (
      <>
        <StatsText>Software modules</StatsText> for detailed monitoring and
        real-time analytics
      </>
    ),
  },
  {
    title: '24/7',
    content: (
      <>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without
        history limitations
      </>
    ),
  },
  {
    title: '13%',
    content: (
      <>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
        their management solution
      </>
    ),
  },
  {
    title: '250M+',
    content: (
      <>
        <StatsText>Plants</StatsText> currently connected and monitored by the
        NewLife™ software
      </>
    ),
  },
];