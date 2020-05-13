class Api::V1::ProductsController < ApplicationController
    def index
        products = Product.select(:id, :name, :price, :quantity,:category, :description, :img)
        render json: products, status: :ok
    end
    def show
        product = Product.select(:id, :name, :price, :quantity,:category, :description, :img).where(id: params[:id])
        if product.empty?
            render json: "Product not found", status: 400
        else
            render json: product, status: :ok
        end
    end
end