// swift-tools-version: 5.8
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "romanmazeev.com",
    platforms: [
        .macOS(.v10_15)
    ],
    products: [
        .executable(
            name: "romanmazeev.com",
            targets: ["romanmazeev.com"]
        ),
    ],
    dependencies: [
        .package(url: "https://github.com/BinaryBirds/swift-css", .upToNextMajor(from: "1.0.1")),
        .package(url: "https://github.com/BinaryBirds/swift-html", .upToNextMajor(from: "1.7.0"))
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages this package depends on.
        .executableTarget(
            name: "romanmazeev.com",
            dependencies: [
                .product(name: "SwiftHtml", package: "swift-html"),
                .product(name: "SwiftCss", package: "swift-css")
            ],
            path: "Sources"
        )
    ]
)
