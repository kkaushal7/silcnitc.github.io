document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist/embed-2cd369fa1c0830bd3aa06c21d4f14a13e060d2d31bbaae740f4af4602b825bd9.css">')
document.write('<div id=\"gist28732340\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-valstruct_structure-c\" class=\"file\">\n    \n\n  <div class=\"blob-wrapper data type-c\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-valstruct_structure-c-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-valstruct_structure-c-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">struct<\/span> valstruct{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-valstruct_structure-c-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-valstruct_structure-c-LC2\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">int<\/span> type;              <span class=\"pl-c\">//type indicates whether the result is int,str or pointer to memory address(basically an int value) <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-valstruct_structure-c-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-valstruct_structure-c-LC3\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">union<\/span> Constant value;  <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-valstruct_structure-c-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-valstruct_structure-c-LC4\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c\">/**<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-valstruct_structure-c-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-valstruct_structure-c-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">  if result is of type  int : the result is stored in intval field<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-valstruct_structure-c-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-valstruct_structure-c-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">                        str : the result is stored in strval field<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-valstruct_structure-c-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-valstruct_structure-c-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">  pointer to memory address : the index of memory address is stored in intval field<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-valstruct_structure-c-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-valstruct_structure-c-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\">  **/<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-valstruct_structure-c-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-valstruct_structure-c-LC9\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n<\/table>\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/vishnupriyam/cd19e1c748662f88782f/raw/1c875806d66ce324f3af8e3cdd4b28adb8864334/valstruct_structure.c\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/vishnupriyam/cd19e1c748662f88782f#file-valstruct_structure-c\">valstruct_structure.c<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')