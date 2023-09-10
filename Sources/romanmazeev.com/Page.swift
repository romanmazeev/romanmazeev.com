//
//  File.swift
//  
//
//  Created by Roman Mazeev on 10/09/2023.
//

import Foundation
import SwiftHtml
import SwiftCss

struct RenderedPage {
    let name: String
    let stylesheet: String
    let document: String
}

protocol Page {
    var name: String { get }

    var stylesheet: Stylesheet { get }
    var document: Document { get }
}

extension Page {
    func render(minify: Bool, indent: Int) -> RenderedPage {
        .init(
            name: name,
            stylesheet: StylesheetRenderer(minify: minify, indent: indent).render(stylesheet),
            document: DocumentRenderer(minify: minify, indent: indent).render(document)
        )
    }
}

struct EncodedPage {
    let name: String
    let stylesheet: Foundation.Data
    let document: Foundation.Data

    init(page: RenderedPage) {
        name = page.name
        stylesheet = Data(page.stylesheet.utf8)
        document = Data(page.document.utf8)
    }
}

func generate(pages: [Page], minified: Bool) throws {
    let fileManager = FileManager.default
    let expandedIndent = 4

    try pages
        .map {
            EncodedPage(page: $0.render(minify: minified, indent: minified ? 0 : expandedIndent))
        }
        .forEach {
            let directoryPath = fileManager.currentDirectoryPath.appending("/\($0.name)")
            try fileManager.createDirectory(atPath: directoryPath, withIntermediateDirectories: false)
            
            if !fileManager.createFile(atPath: directoryPath.appending("/index.html"), contents: $0.document) {
                throw PageError.documentSaving
            }

            if !fileManager.createFile(atPath: directoryPath.appending("/styles.css"), contents: $0.stylesheet) {
                throw PageError.stylesheetSaving
            }
        }
}

enum PageError: Error {
    case documentSaving
    case stylesheetSaving
}
