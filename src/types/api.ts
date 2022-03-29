export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtonsProps = {
  label: string
  url: string
}
export type ImageProps = {
  url: string
  alternativeText: string
}

export type ModulesProps = {
  title: string
  subtitle: string
  description: string
}

export type SocialLink = {
  title: string
  url: string
}
export type Author = {
  photo: ImageProps
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type Review = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type Question = {
  question: string
  answer: string
}
export type TechIconsProps = {
  title: string
  icon: {
    url: string
  }
}
export type HeaderProps = {
  title: string
  description: string
  button: ButtonsProps
  image: ImageProps
}

export type AboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

export type SectionTechProps = {
  title: string
  description: string
  techIcons: TechIconsProps[]
}
export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type SectionModulesProps = {
  title: string
  modules: ModulesProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonsProps
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}
export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: AboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
