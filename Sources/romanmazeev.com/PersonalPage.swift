//
//  PersonalPage.swift
//
//
//  Created by Roman Mazeev on 10/09/2023.
//

import SwiftHtml
import SwiftCss

struct PersonalPage: Page {
    let name = "PersonalPage"

    let stylesheet: Stylesheet = {
        Stylesheet {
            Media {
                All {
                    Background("#222")
                }
                Root {
                    Color(.blue)
                }
                Element(.div) {
                    BackgroundColor(.red)
                    Color(.white)
                    TextAlign(.left)
                }
                .pseudo(.nthChild(2))
            }
            Media("only screen and (max-width: 600px)") {
                Id("custom-identifier") {
                    Background("#222")
                    Color(.cyan)
                }
                Class("custom-class") {
                    Background("#333")
                    Color(.aliceBlue)
                }
                Selector("ul > li > a") {
                    Background("black")
                    Color(.red)
                        .important()
                }
                .pseudo(.hover)
            }
        }
    }()
    
    let document: Document = {
        Document(.html) {
            Html {
                Head {
                    Title("Hello Swift HTML DSL")

                    Meta().charset("utf-8")
                    Meta().name(.viewport).content("width=device-width, initial-scale=1")

                    Link(rel: .stylesheet).href("style.css")
                }
                Body {
                    Main {
                        Div {
                            Section {
                                Img(src: "./images/swift.png", alt: "Swift Logo")
                                    .title("Picture of the Swift Logo")
                                H1("Lorem ipsum")
                                    .class("red")
                                P("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
                                    .class(["green", "blue"])
                                    .spellcheck(false)
                            }

                            A("Download SwiftHtml now!")
                                .href("https://github.com/binarybirds/swift-html/")
                                .target(.blank)
                                .download()

                            Abbr("WTFPL")
                                .title("Do What The Fuck You Want To Public License")
                        }
                    }
                    .class("container")
                }
            }
        }
    }()
}
