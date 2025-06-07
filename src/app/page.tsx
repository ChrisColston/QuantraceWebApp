"use client"

import {
  Background,
  Badge,
  Column,
  Heading,
  LetterFx,
  RevealFx,
  Flex,
  Text,
  Particle,
  ThemeSwitcher,
  Row,
} from "@/once-ui/components"
import { FaLinkedin, FaFacebook, FaInstagram, FaSquareXTwitter, FaTiktok, FaEnvelope } from "react-icons/fa6"

const social = [
  { name: "LinkedIn", link: "https://www.linkedin.com/company/quantracelabs", icon: FaLinkedin },
  { name: "Facebook", link: "https://www.facebook.com/profile.php?id=61576811107696", icon: FaFacebook },
  {
    name: "Instagram",
    link: "https://www.instagram.com/quantracelabs?igsh=MXV2M3JwZGdiMW1vZQ%3D%3D&utm_source=qr",
    icon: FaInstagram,
  },
  { name: "X (Twitter)", link: "https://x.com/quantracelabs?s=21", icon: FaSquareXTwitter },
  { name: "TikTok", link: "https://www.tiktok.com/@quantrace?_t=ZN-8wxcc66iIfW&_r=1", icon: FaTiktok },
  {
    name: "Email",
    link: "mailto:support@quantrace.com?subject=Quantrace:%20Website%20enquiry&body=Welcome%20to%20Quantrace,%20thanks%20for%20reaching%20out!%20How%20can%20we%20help.",
    icon: FaEnvelope,
  },
]

const SocialIcon = ({ href, icon: Icon, name }: { href: string; icon: React.ElementType; name: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 text-neutral-400 hover:text-white"
      title={name}
    >
      <Icon size={20} />
    </a>
  )
}

const Footer1 = ({ social }: { social: typeof social }) => {
  const currentYear = new Date().getFullYear()

  return (
    <Flex as="footer" fillWidth padding="8" horizontal="center" mobileDirection="column">
      <Flex
        maxWidth="xl"
        paddingY="16"
        paddingX="16"
        gap="24"
        horizontal="space-between"
        vertical="center"
        mobileDirection="column"
      >
        {/* Company Information */}
        <Column gap="8" maxWidth="m">
          <Text variant="body-default-s" onBackground="neutral-medium">
            <Text onBackground="neutral-medium">© {currentYear} Quantrace Ltd - All rights reserved</Text>
          </Text>
          <Text variant="body-default-s" onBackground="neutral-medium">
            <Text onBackground="neutral-weak">Company registration: 16493899</Text>
          </Text>
          <Text variant="body-default-xs" onBackground="neutral-weak" wrap="balance">
            3rd Floor, 86-90 Paul Street, London, < br/>
            England, United Kingdom, EC2A 4NE
          </Text>
        </Column>

        {/* Social Icons */}
        <Flex gap="8" vertical="center">
          {social.map((item) => (
            <SocialIcon key={item.name} href={item.link} icon={item.icon} name={item.name} />
          ))}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Particle />
      {/* Hero Section */}
      <Column fillWidth paddingY="64" horizontal="center" fitHeight>
        <RevealFx fill position="absolute" top="0" speed="medium">
          <Background
            fill
            mask={{
              x: 50,
              y: 0,
              radius: 75,
            }}
            gradient={{
              display: true,
              x: 50,
              y: 0,
              colorStart: "accent-solid-strong",
              colorEnd: "static-transparent",
            }}
            lines={{
              display: true,
              opacity: 30,
              size: "4",
              thickness: 1,
              color: "page-background",
            }}
          />
        </RevealFx>

     
      
        
        <Column maxWidth={40} gap="10">
        <ThemeSwitcher horizontal="center"/>< br/>
          <RevealFx fillWidth speed="slow" horizontal="center">
            
            <Badge
              paddingY="8"
              paddingX="16"
              gap="8"
             border="neutral-alpha-medium"
              textVariant="label-default-l"
              icon="calendar"
            >
              <LetterFx trigger="instant" speed="slow">
                Quantrace: Coming Soon
              </LetterFx>
            </Badge>
          </RevealFx>

          <RevealFx speed="fast" delay={0.6} translateY="4" horizontal="center">
            <Heading align="center" variant="display-strong-xl" paddingTop="128" paddingBottom="8">
              <LetterFx trigger="instant" speed="medium" charset="X@#$%^&*()_+-=[]{}|;:,.<>?">
                Secure. Scale. Succeed.
              </LetterFx>
            </Heading>
          </RevealFx>

          <RevealFx speed="fast" delay={0.4} translateY="12" horizontal="center">
            <Heading wrap="balance" align="center" onBackground="neutral-medium" variant="heading-default-xl">
              From blockchain strategy to endpoint resilience, Quantrace helps growing businesses prepare for the future
              of digital operations—securely and intelligently.
            </Heading>
          </RevealFx>

          <RevealFx
            speed="fast"
            delay={0.4}
            translateY="12"
            marginBottom="24"
            onBackground="accent-medium"
            horizontal="center"
          >
            <Heading align="center" variant="heading-default-l">
              Built for SMEs. Powered by Web3.
            </Heading>
          </RevealFx>

          <RevealFx speed="fast" delay={0.6} translateY="12" horizontal="center">
            <Text align="center" variant="body-default-l" onBackground="neutral-medium" wrap="balance">
              Our experts deliver hands-on consultancy, cyber security services, and blockchain integration—bridging
              today's priorities with tomorrow's tech.
            </Text>
          </RevealFx>
        </Column>
      </Column>

      {/* Mailchimp Notify Me Signup */}
      <div id="mc_embed_shell" style={{ display: "flex", justifyContent: "center", margin: "0" }}>
        <div id="mc_embed_signup">
          <form
            action="https://quantrace.us19.list-manage.com/subscribe/post?u=f5fe83420feae6387f3cd5f78&amp;id=e723abdd39&amp;f_id=007e92e4f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <h2>Notify Me</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required
                  defaultValue=""
                />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
              </div>
              <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                <input
                  type="text"
                  name="b_f5fe83420feae6387f3cd5f78_e723abdd39"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer1 social={social} />
    </div>
  )
}