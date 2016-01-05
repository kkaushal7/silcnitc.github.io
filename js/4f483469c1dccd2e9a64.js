document.write('<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist/embed-2cd369fa1c0830bd3aa06c21d4f14a13e060d2d31bbaae740f4af4602b825bd9.css">')
document.write('<div id=\"gist28650622\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-global_symboltable-h\" class=\"file\">\n    \n\n  <div class=\"blob-wrapper data type-c\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-global_symboltable-h-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-global_symboltable-h-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">struct<\/span> <span class=\"pl-en\">Gsymbol<\/span>{<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-global_symboltable-h-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-global_symboltable-h-LC2\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">char<\/span> *name;               <span class=\"pl-c\">//name of the variable or function<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-global_symboltable-h-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-global_symboltable-h-LC3\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">struct<\/span> <span class=\"pl-en\">Typetable<\/span> *type;   <span class=\"pl-c\">//pointer to the Typetable entry of variable type/return type of the function<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-global_symboltable-h-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-global_symboltable-h-LC4\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">int<\/span> size;                 <span class=\"pl-c\">//size of an array. (The sizes of all other variables in 1) <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-global_symboltable-h-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-global_symboltable-h-LC5\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">int<\/span> binding;              <span class=\"pl-c\">//stores static memory address allocated to the variable<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-global_symboltable-h-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-global_symboltable-h-LC6\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">struct<\/span> <span class=\"pl-en\">Argstruct<\/span> *arglist;<span class=\"pl-c\">//pointer to the head of argument list in case of functions<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-global_symboltable-h-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-global_symboltable-h-LC7\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">struct<\/span> <span class=\"pl-en\">ASTNode<\/span> *fbinding; <span class=\"pl-c\">//pointer to the root of the abstract syntax tree of the function (for interpreter) <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-global_symboltable-h-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-global_symboltable-h-LC8\" class=\"blob-code blob-code-inner js-file-line\">                            <span class=\"pl-c\">//In case of compiler, the call address must be stored in fbinding<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-global_symboltable-h-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-global_symboltable-h-LC9\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-k\">struct<\/span> <span class=\"pl-en\">Gsymbol<\/span> *next;     <span class=\"pl-c\">//points to the next Global Symbol Table entry<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-global_symboltable-h-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-global_symboltable-h-LC10\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n<\/table>\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/vishnupriyam/4f483469c1dccd2e9a64/raw/05bc5729e7059dafcdf3a9678c2f3028d2d5d9db/global_symboltable.h\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/vishnupriyam/4f483469c1dccd2e9a64#file-global_symboltable-h\">global_symboltable.h<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
