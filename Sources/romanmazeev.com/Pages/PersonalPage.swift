//
//  PersonalPage.swift
//
//
//  Created by Roman Mazeev on 10/09/2023.
//

import SwiftHtml
import SwiftCss

struct PersonalPage: Page {
    let stylesheet: Stylesheet = {

        return Stylesheet {
            Media {
                Html {
                    Display(.flex)
                    AlignItems(.center)
                    JustifyContent(.center)
                    Height(.percent(100))
                }

                Body {
                    FontFamily(.family("-apple-system, BlinkMacSystemFont, sans-serif"))
                }

                Class("wrapper") {
                    Display(.flex)
                    FlexDirection(.column)
                    Padding(.px(20))
                }

                H1 {
                    Margin(top: .zero)
                }

                H3 {
                    Margin(.zero)
                }

                Class("text-1") {
                    Margin(top: .px(12))
                }

                Class("text-2") {
                    Margin(top: .px(8))
                }

                Class("avatar") {
                    Width(.px(84))
                    Height(.px(118))
                    Margin(top: .zero, right: .px(12), bottom: .px(12), left: .zero)
                }

                Footer {
                    Margin(.auto)
                    Display(.flex)
                    JustifyContent(.center)
                }

                Class("social") {
                    Padding(.px(12))
                }
            }

            Media(screen: .s) {
                Class("wrapper") {
                    FlexDirection(.row)
                }
            }

            Media(screen: .dark) {
                Html {
                    BackgroundColor(.black)
                    Color(.white)
                }
            }
        }
    }()

    let document: Document = {
        Document(.html) {
            Html {
                Head {
                    Title("Roman Mazeev")

                    Meta().charset("utf-8")
                    Meta().name(.viewport).content("width=device-width, initial-scale=1")

                    Link(rel: .stylesheet).href("styles.css")
                    Link(rel: .icon).type("image/x-icon").href("public/favicon.ico")
                }

                Body {
                    Div {
                        Img(src: "public/avatar.png", alt: "Avatar")
                            .class("avatar")

                        Div {
                            H1("👋 I'm Roman")
                            H3("Software Engineer")

                            P("I prefer Swift and  related technologies. ❤️ Open Source")
                                .class("text-1")
                            P("Based in Amsterdam 🇳🇱")
                                .class("text-2")
                        }
                    }
                    .class("wrapper")
                }

                Footer {
                    A {
                        Img(src: "public/social/mail.svg", alt: "Mail")
                    }
                    .href("mailto:me@romanmazeev.com")
                    .class("social")

                    A {
                        Img(src: "public/social/github.svg", alt: "GitHub")
                    }
                    .href("https://github.com/romanmazeev")
                    .class("social")

                    A  {
                        Img(src: "public/social/twitter.svg", alt: "Twitter")
                    }
                    .href("https://twitter.com/romanmazeev")
                    .class("social")

                    A {
                        Img(src: "public/social/linkedin.svg", alt: "LinkedIn")
                    }
                    .href("https://www.linkedin.com/in/romanmazeev")
                    .class("social")
                }
            }
        }
    }()
}
