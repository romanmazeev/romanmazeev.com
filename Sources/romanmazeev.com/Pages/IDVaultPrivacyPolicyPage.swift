//
//  IDVaultPrivacyPolicyPage.swift
//  romanmazeev.com
//
//  Created by Roman Mazeev on 17/05/2025.
//

import SwiftHtml
import SwiftCss

struct IDVaultPrivacyPolicyPage: Page {
    let location: PageLocation = .subdirectory("/IDVault/privacy-policy")
    let stylesheet: Stylesheet? = nil

    let document: Document = {
        Document(.html) {
            Html {
                Text(
                    """
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                      <meta charset="UTF-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <title>Privacy Policy – ID Vault</title>
                    </head>
                    <body style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 2rem auto; padding: 1rem; color: #333;">
                      <h1>Privacy Policy</h1>
                      <p>Effective date: May 17, 2025</p>

                      <p>
                        This Privacy Policy explains how the ID Vault app (“we”, “our”, or “the app”) handles your data.
                        We are committed to your privacy and do not collect or share any personal information.
                      </p>

                      <h2>1. Data Collection</h2>
                      <p>
                        ID Vault does <strong>not</strong> collect, transmit, or store any personal data on external servers.
                        All information — including scanned documents and related metadata — is stored <strong>locally on your device</strong>.
                      </p>

                      <h2>2. Camera and NFC Usage</h2>
                      <p>
                        ID Vault uses your device’s <strong>camera</strong> to scan MRZ (Machine Readable Zone) codes from supported ID documents.
                        Optionally, the app uses <strong>NFC</strong> to extract additional data from compatible documents, such as biometric information or extended identity details.
                        All scanning and processing is performed <strong>entirely on your device</strong>.
                      </p>

                      <h2>3. iCloud Sync (Optional)</h2>
                      <p>
                        If you choose to enable iCloud sync, your documents may be securely backed up and synchronized across your Apple devices using your Apple ID.
                        iCloud is provided and managed by Apple, and we do not have access to this data.
                      </p>

                      <h2>4. No Analytics, No Tracking</h2>
                      <p>
                        ID Vault does not use analytics services, advertising SDKs, or third-party tracking tools.
                        We do not collect or share usage data under any circumstances.
                      </p>

                      <h2>5. Security</h2>
                      <p>
                        All data remains on your device and is protected by iOS system-level security. We recommend using Face ID, Touch ID, or a passcode to help protect your information.
                      </p>

                      <h2>6. Changes to This Policy</h2>
                      <p>
                        We may update this privacy policy in the future. Any changes will be published in the app and on this page.
                      </p>

                      <h2>7. Contact</h2>
                      <p>
                        If you have any questions or concerns, feel free to contact us at:  
                        <a href="mailto:idvault@romanmazeev.com">idvault@romanmazeev.com</a>
                      </p>

                      <hr />
                      <p style="font-size: 0.9em;">© 2025 ID Vault. All rights reserved.</p>
                    </body>
                    </html>
                    """
                )
            }
        }
    }()
}
