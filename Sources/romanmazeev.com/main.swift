//
//  main.swift
//  romanmazeev.com
//
//  Created by Roman Mazeev on 10/09/2023.
//

import Foundation

let expandedIndent = 4
let fileManager = FileManager.default
let buildDirectoryPath = fileManager.currentDirectoryPath.appending("/build")
let buildPublicDirectoryPath = addPublic(to: buildDirectoryPath)

try movePublicDirectory()

try [
    PersonalPage(),
    IDVaultPrivacyPolicyPage()
].generate(minified: true)

//

private func movePublicDirectory() throws {
    let publicDirectoryPath = addPublic(to: fileManager.currentDirectoryPath)
    guard fileManager.fileExists(atPath: publicDirectoryPath) else {
        throw AppError.publicFolderNotExist
    }

    try fileManager.createDirectory(atPath: buildDirectoryPath, withIntermediateDirectories: false)
    try fileManager.copyItem(atPath: publicDirectoryPath, toPath: buildPublicDirectoryPath)
}

private func addPublic(to path: String) -> String {
    path.appending("/public")
}

private enum AppError: Error {
    case publicFolderNotExist
}
