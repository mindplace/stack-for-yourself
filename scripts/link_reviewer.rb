require 'html-proofer'

class LinkReviewer
  attr_accessor :pages, :page_links

  LINK_REGEXP = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*))/.freeze

  def initialize
    @pages = site_pages
    @page_links = links_by_pages
  end

  def test_links
    HTMLProofer.check_links(
      page_links,
      { typhoeus: { ssl_verifypeer: false, ssl_verifyhost: 0 } }
    ).run
  end

  private

  def site_pages
    Dir["./_posts/*"]
  end

  def links_by_pages
    pages.map do |page|
      page_content = File.read(page)
      scrape_page_links(page_content)
    end.flatten
  end

  def scrape_page_links(content)
    content.scan(LINK_REGEXP).map(&:first).flatten
  end
end

link_reviewer = LinkReviewer.new
link_reviewer.test_links
