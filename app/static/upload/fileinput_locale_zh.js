/*!
 * FileInput Chinese Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author kangqf <kangqingfei@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinput.locales.zh = {
        fileSingle: 'File',
        filePlural: 'Multiple files',
        browseLabel: 'Choose &hellip;',
        removeLabel: 'Remove',
        removeTitle: 'Clear selected files',
        cancelLabel: 'Cancel',
        cancelTitle: 'Cancel the upload in progress',
        uploadLabel: 'Upload',
        uploadTitle: 'Upload selected files',
        msgSizeTooLarge: 'The file "{name}" (<b>{size} KB</b>) exceeds the allowed size <b>{maxSize} KB</b>. Please upload again! ',
        msgFilesTooLess: 'You must select at least <b>{n}</b> {files} to upload. Please upload again!',
        msgFilesTooMany: 'The number of selected upload files <b>({n})</b> exceeds the maximum number of files <b>{m}</b>. Please upload again!',
        msgFileNotFound: 'The file "{name}" was not found!',
        msgFileSecured: 'Security restrictions, to prevent reading the file "{name}".',
        msgFileNotReadable: 'The file "{name}" is not readable.',
        msgFilePreviewAborted: 'Cancel the preview of "{name}".',
        msgFilePreviewError: 'An error occurred while reading "{name}".',
        msgInvalidFileType: 'Incorrect type "{name}". Only files of type "{types}" are supported.',
        msgInvalidFileExtension: 'Incorrect file extension "{name}". Only "{extensions}" file extensions are supported.',
        msgValidationError: 'File upload error',
        msgLoading: 'Load the {index} file of {files} &hellip;',
        msgProgress: '加载第 {index} 文件 共 {files} - {name} - {percent}% 完成.',
        msgSelected: '{n} {files} Selected',
        msgFoldersNotAllowed: 'Only support drag and drop files! Skip the drag and drop folders.{n}',
        dropZoneTitle: 'Drag and drop files here &hellip;',
        slugCallback: function(text) {
            return text ? text.split(/(\\|\/)/g).pop().replace(/[^\w\u4e00-\u9fa5\-.\\\/ ]+/g, '') : '';
        }
    };

    $.extend($.fn.fileinput.defaults, $.fn.fileinput.locales.zh);
})(window.jQuery);
