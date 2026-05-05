export function Footer() {
  const startYear = 2024
  const currentYear = new Date().getFullYear()
  const yearDisplay =
    startYear === currentYear ? startYear : `${startYear} - ${currentYear}`

  return (
    <footer className="mt-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 className="mb-2 text-xl font-bold">MB AUTO</h3>
            <p className="text-gray-400">
              Your one-stop shop for vehicle maintenance.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="tel:+60127196133"
                  className="transition-colors duration-300 hover:text-blue-300"
                >
                  012-719 6133
                </a>
              </li>
              <li>
                <a
                  href="mailto:mbauto.servicecentre@gmail.com"
                  className="transition-colors duration-300 hover:text-blue-300"
                >
                  mbauto.servicecentre@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>
            &copy; {yearDisplay} MB Auto Service Centre. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
