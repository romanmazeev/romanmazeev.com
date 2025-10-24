//
//  PersonalPage.swift
//
//
//  Created by Roman Mazeev on 10/09/2023.
//

import SwiftHtml
import SwiftCss

struct PersonalPage: Page {
    let location: PageLocation = .root

    let stylesheet: Stylesheet? = {

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

                Class("avatar") {
                    Height(.px(100))
                    Width(.px(72))
                    Margin(top: .zero, right: .px(12), bottom: .px(12), left: .zero)
                }

                Footer {
                    Margin(.auto)
                    Display(.flex)
                    FlexDirection(.column)
                    AlignItems(.center)
                }

                Class("social") {
                    Padding(.px(12))
                }

                Class("social-row") {
                    Display(.flex)
                    JustifyContent(.center)
                    AlignItems(.center)
                }

                Class("id-vault") {
                    Display(.flex)
                    JustifyContent(.center)
                    AlignItems(.center)
                    Margin(top: .px(12), right: .zero, bottom: .zero, left: .zero)
                }

                Class("id-vault-img") {
                    Width(.px(40))
                    Height(.px(40))
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

                            P("Swift and  related technologies. Based in Amsterdam 🇳🇱")
                                .class("text-1")
                        }
                    }
                    .class("wrapper")
                }

                Footer {
                    Div {
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

                        A {
                            Img(src: "public/social/twitter.svg", alt: "Twitter")
                        }
                        .href("https://twitter.com/romanmazeev")
                        .class("social")

                        A {
                            Img(src: "public/social/linkedin.svg", alt: "LinkedIn")
                        }
                        .href("https://www.linkedin.com/in/romanmazeev")
                        .class("social")

                        A {
                            Img(src: "public/social/mastodon.svg", alt: "Mastodon")
                        }
                        .rel(.me)
                        .href("https://mastodon.social/@romanmazeev")
                        .class("social")
                    }
                    .class("social-row")

                    A {
                        Img(src: "public/IDVaultAppIcon.png", alt: "ID Vault")
                            .class("id-vault-img")
                    }
                    .href("https://apps.apple.com/app/id6744865269")
                    .class("id-vault")
                }
            }
        }
    }()
}
