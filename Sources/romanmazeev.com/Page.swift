//
//  Page.swift
//  
//
//  Created by Roman Mazeev on 10/09/2023.
//

import Foundation
import SwiftHtml
import SwiftCss

struct RenderedPage {
    let stylesheet: String
    let document: String
}

protocol Page {
    var stylesheet: Stylesheet { get }
    var document: Document { get }
}

extension Page {
    func render(minify: Bool, indent: Int) -> RenderedPage {
        .init(
            stylesheet: StylesheetRenderer(minify: minify, indent: indent).render(stylesheet),
            document: DocumentRenderer(minify: minify, indent: indent).render(document)
        )
    }
}

struct EncodedPage {
    let stylesheet: Foundation.Data
    let document: Foundation.Data

    init(page: RenderedPage) {
        stylesheet = Data(page.stylesheet.utf8)
        document = Data(page.document.utf8)
    }
}

extension Array where Element: Page {
    func generate(minified: Bool) throws {
        try self
            .map {
                EncodedPage(page: $0.render(minify: minified, indent: minified ? 0 : expandedIndent))
            }
            .forEach {
                if !fileManager.createFile(atPath: buildDirectoryPath.appending("/index.html"), contents: $0.document) {
                    throw PageError.documentSaving
                }

                if !fileManager.createFile(atPath: buildDirectoryPath.appending("/styles.css"), contents: $0.stylesheet) {
                    throw PageError.stylesheetSaving
                }
            }
    }
}

enum PageError: Error {
    case documentSaving
    case stylesheetSaving
}
