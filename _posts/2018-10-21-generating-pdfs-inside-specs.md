---
layout: post
title: "Generating PDFs inside RSpec"
shortnote: "Using WickedPdf to generate PDFs"
tags: [blog]
published: false
---


https://stackoverflow.com/questions/24778119/how-to-save-generated-pdf-in-server-in-rails

```
subject(:pdf) { described_class.new(rollover: rollover).pdf }
File.open("/Users/estherleytush/pdf_test.pdf", "wb") { |f| f.write(pdf) }


  def render_pdf
    WickedPdf.new.pdf_from_string(
      render_html,
      page_size: 'Letter',
      margin: {
        top:    '0.75in',
        bottom: '0.75in',
        left:   '0.75in',
        right:  '0.75in'
      }
    )
  end

  def render_html
    view = ActionView::Base.new("#{RetailCore::Engine.root}/app/views/")
    view.class_eval { include WickedPdfHelper }
    view.render(
      file: 'rollover_documents/document',
      locals: { rollover: rollover }
    )
  end
```
