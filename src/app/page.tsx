"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Briefcase, User, Zap, Star, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="largeSizeMediumTitles"
      background="radialGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Work", id: "work" },
            { name: "About", id: "about" },
            { name: "Experience", id: "experience" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Portfolio"
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="PORTFOLIO"
          description="Creative professional showcasing design expertise, strategic thinking, and digital solutions for modern brands"
          buttons={[
            { text: "View My Work", href: "work" },
            { text: "Learn More", href: "about" }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099563969-68on6e0t.jpg",
              imageAlt: "Creative workspace"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099565022-lcipya9j.jpg",
              imageAlt: "Designer working"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099565900-utxgsg23.jpg",
              imageAlt: "Portfolio showcase"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="work" data-section="work">
        <ProductCardSix
          products={[
            {
              id: "1",
              name: "E-Commerce Platform Redesign",
              price: "2023",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099566628-8z0cvc1k.jpg",
              imageAlt: "E-commerce project"
            },
            {
              id: "2",
              name: "Brand Identity System",
              price: "2023",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099567512-zt21f4bt.jpg",
              imageAlt: "Branding project"
            },
            {
              id: "3",
              name: "SaaS Dashboard Experience",
              price: "2024",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099568198-pjucmijx.jpg",
              imageAlt: "SaaS design project"
            }
          ]}
          title="Featured Work"
          description="A selection of recent projects demonstrating strategic design thinking and user-centered solutions"
          tag="Projects"
          tagIcon={Briefcase}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="About My Professional Journey"
          description="With over 8 years of experience in digital design and brand strategy, I help businesses create meaningful connections with their audiences through thoughtful, user-centered design. My approach combines creative problem-solving with strategic thinking to deliver results that matter."
          tag="About Me"
          tagIcon={User}
          buttons={[
            { text: "Download Resume", href: "#" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099569085-26pmsqct.jpg"
          imageAlt="Professional portrait"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="experience" data-section="experience">
        <FeatureCardSix
          features={[
            {
              id: 1,
              title: "Creative Strategy",
              description: "Developing comprehensive brand and digital strategies that align with business objectives and resonate with target audiences",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099566628-8z0cvc1k.jpg",
              imageAlt: "Strategy development"
            },
            {
              id: 2,
              title: "User Experience Design",
              description: "Creating intuitive, accessible interfaces that prioritize user needs and drive meaningful interactions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099567512-zt21f4bt.jpg",
              imageAlt: "UX design work"
            },
            {
              id: 3,
              title: "Brand Development",
              description: "Building cohesive visual identities and brand systems that establish strong market presence",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099568198-pjucmijx.jpg",
              imageAlt: "Brand development"
            }
          ]}
          title="Core Expertise"
          description="Specializing in design disciplines that drive business growth and user satisfaction"
          tag="Experience"
          tagIcon={Zap}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          testimonials={[
            {
              id: "1",
              quote: "Outstanding work! The design solutions exceeded our expectations and directly contributed to a 40% increase in user engagement.",
              name: "Sarah Johnson",
              role: "CEO, TechVenture",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099569723-mj4y5h4h.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              quote: "Professional, creative, and deeply understanding of user needs. The brand system delivered was comprehensive and implementation-ready.",
              name: "Michael Chen",
              role: "Creative Director, DesignCo",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099570731-lqgzx90b.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              quote: "Exceptional attention to detail and strategic thinking. The portfolio redesign transformed how we present our work to clients.",
              name: "Emily Rodriguez",
              role: "Product Manager, InnovateLab",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099571817-38x6nneb.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              quote: "Reliable partner who listens, iterates, and delivers. Highly recommended for anyone seeking quality design work.",
              name: "David Kim",
              role: "Founder, StartupXYZ",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1766099572394-s1ul9nc6.jpg",
              imageAlt: "David Kim"
            }
          ]}
          title="What Clients Say"
          description="Trusted by leading brands and businesses for strategic design and creative excellence"
          tag="Testimonials"
          tagIcon={Star}
          textboxLayout="default"
          variant="card"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Let's Create Something Amazing Together"
          description="I'm always interested in hearing about new projects and opportunities. Reach out to discuss how we can work together to bring your vision to life."
          tagIcon={Mail}
          useInvertedBackground="noInvert"
          inputPlaceholder="your@email.com"
          buttonText="Send Message"
          termsText="I respect your privacy. I'll only use your email to get back to you about your inquiry."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          columns={[
            {
              items: [
                { label: "Work", href: "work" },
                { label: "About", href: "about" },
                { label: "Experience", href: "experience" }
              ]
            },
            {
              items: [
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Dribbble", href: "https://dribbble.com" },
                { label: "Twitter", href: "https://twitter.com" }
              ]
            },
            {
              items: [
                { label: "Email", href: "mailto:hello@portfolio.com" },
                { label: "Contact", href: "contact" },
                { label: "Terms", href: "#" }
              ]
            }
          ]}
          logoText="Portfolio"
        />
      </div>
    </ThemeProvider>
  );
}