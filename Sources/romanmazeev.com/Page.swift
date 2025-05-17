//
//  Page.swift
//  
//
//  Created by Roman Mazeev on 10/09/2023.
//

import Foundation
import SwiftHtml
import SwiftCss

enum PageLocation {
    case root
    case subdirectory(String)

    var path: String {
        switch self {
        case .root:
            return ""
        case .subdirectory(let path):
            return path
        }
    }
}

struct RenderedPage {
    let stylesheet: String?
    let document: String
}

protocol Page {
    var location: PageLocation { get }

    var stylesheet: Stylesheet? { get }
    var document: Document { get }
}

extension Page {
    func render(minify: Bool, indent: Int) -> RenderedPage {
        .init(
            stylesheet: stylesheet.map { StylesheetRenderer(minify: minify, indent: indent).render($0) },
            document: DocumentRenderer(minify: minify, indent: indent).render(document)
        )
    }
}

extension [Page] {
    func generate(minified: Bool) throws {
        try self
            .forEach {
                let renderedPage = $0.render(minify: minified, indent: minified ? 0 : expandedIndent)
                let encodedDocument = Data(renderedPage.document.utf8)
                let encodedStylesheet = renderedPage.stylesheet.map { Data($0.utf8) }

                if !$0.location.path.isEmpty {
                    try fileManager.createDirectory(atPath: buildDirectoryPath.appending($0.location.path), withIntermediateDirectories: true)
                }

                if !fileManager.createFile(atPath: buildDirectoryPath.appending("\($0.location.path)/index.html"), contents: encodedDocument) {
                    throw PageError.documentSaving
                }

                if let encodedStylesheet {
                    if !fileManager.createFile(atPath: buildDirectoryPath.appending("\($0.location.path)/styles.css"), contents: encodedStylesheet) {
                        throw PageError.stylesheetSaving
                    }
                }
            }
    }
}

enum PageError: Error {
    case documentSaving
    case stylesheetSaving
}
