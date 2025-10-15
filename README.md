# Day for Night Website Archive

This is a complete snapshot of the dayfornight.io website from October 8, 2015 (Wayback Machine timestamp: 20151008131659), downloaded with all assets including images, CSS, fonts, and JavaScript files.

## Files Included

- `index_clean.html` - Clean version of the homepage without Wayback Machine artifacts
- `index.html` - Original version with Wayback Machine scripts (for reference)
- `microsite-assets/` - All website assets including CSS, fonts, and images
- `bower_components/` - JavaScript dependencies (jQuery, Foundation, Modernizr)
- `js/` - Custom JavaScript files
- `font-awesome.min.css` - Font Awesome CSS for icons

## How to View the Site

### Option 1: Using the built-in Python server
```bash
python3 serve.py
```
Then open http://localhost:8000/index_clean.html in your browser.

### Option 2: Using any other web server
You can serve this directory with any web server. For example:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server

# PHP
php -S localhost:8000
```

Then navigate to `index_clean.html` in your browser.

## Site Structure

```
.
├── index_clean.html              # Main page (cleaned)
├── index.html                    # Original archived page
├── serve.py                      # Local web server script
├── font-awesome.min.css          # Font Awesome icons
├── microsite-assets/
│   ├── css/
│   │   ├── app.css              # Main stylesheet
│   │   ├── fonts/               # Custom GT-Cinetype fonts
│   │   └── images/
│   │       └── br-home-bg.jpg   # Background image
│   └── svg/
│       └── logo-opt.svg         # Site logo
├── bower_components/
│   ├── jquery/dist/
│   │   └── jquery.min.js        # jQuery library
│   ├── foundation/js/
│   │   └── foundation.min.js    # Foundation framework
│   └── modernizr/
│       └── modernizr.js         # Modernizr library (minimal)
└── js/
    └── app.js                   # Custom application JavaScript
```

## Notes

- This archive represents the Day for Night festival website as it appeared on October 8, 2015
- The festival was scheduled for December 19-20, 2015
- All external dependencies have been downloaded and made local for offline viewing
- Some JavaScript files weren't properly archived by the Wayback Machine, so minimal replacements were created
- The site uses custom GT-Cinetype fonts which are included in the archive

## Technical Details

- Built with Foundation CSS framework
- Uses jQuery for JavaScript functionality
- Custom GT-Cinetype font family in Light, Regular, and Bold weights
- Responsive design with mobile-first approach
- Font Awesome icons for social media links

## Archive Information

- Original URL: http://dayfornight.io/
- Archive Date: October 8, 2015, 13:16:59 UTC
- Wayback Machine URL: https://web.archive.org/web/20151008131659/http://dayfornight.io/
- Downloaded: October 3, 2025