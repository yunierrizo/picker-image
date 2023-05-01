export interface ImageProps {
    id: string;
    created_at: string;
    updated_at: string;
    promoted_at: any;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: any;
    alt_description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
    };
    links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
    };
    likes: number;
    liked_by_user: boolean;
    current_user_collections: [];
    sponsorship: {
        impression_urls: [];
        tagline: string;
        tagline_url: string;
        sponsor: {
            id: string;
            updated_at: string;
            username: string;
            name: string;
            first_name: string;
            last_name: string;
            twitter_username: string;
            portfolio_url: string;
            bio: string;
            location: string;
            links: {
                self: string;
                html: string;
                photos: string;
                likes: string;
                portfolio: string;
                following: string;
                followers: string;
            };
            profile_image: {
                small: string;
                medium: string;
                large: string;
            };
            instagram_username: string;
            total_collections: number;
            total_likes: number;
            total_photos: number;
            accepted_tos: boolean;
            for_hire: boolean;
            social: {
                instagram_username: string;
                portfolio_url: string;
                twitter_username: string;
                paypal_email: string;
            };
        };
    };
    topic_submissions: {};
    user: ImageUserProps;
}

export interface ImageUserProps{
        id: string;
        updated_at: string;
        username: string;
        name: string;
        first_name: string;
        last_name: string;
        twitter_username: string;
        portfolio_url: string;
        bio: string;
        location: string;
        links: {
            self: string;
            html: string;
            photos: string;
            likes: string;
            portfolio: string;
            following: string;
            followers: string;
        };
        profile_image: {
            small: string;
            medium: string;
            large: string;
        };
        instagram_username: string;
        total_collections: number;
        total_likes: number;
        total_photos: number;
        accepted_tos: boolean;
        for_hire: boolean;
        social: {
            instagram_username: string;
            portfolio_url: string;
            twitter_username: string;
            paypal_email: string;
        };
    };

export interface UserProps {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
        self: string;
        html: string;
        photos: string;
        likes: string;
        portfolio: string;
        following: string;
        followers: string;
    };
    profile_image: {
        small: string;
        medium: string;
        large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
        instagram_username: string;
        portfolio_url: string;
        twitter_username: string;
        paypal_email: string;
    };
    followed_by_user: boolean;
    photos: [
        {
            id: string;
            created_at: string;
            updated_at: string;
            blur_hash: string;
            urls: {
                raw: string;
                full: string;
                regular: string;
                small: string;
                thumb: string;
                small_s3: string;
            };
        }
    ];
    badge: {
        title: string;
        primary: boolean;
        slug: string;
        link: string;
    };
    tags: any;
    followers_count: number;
    following_count: number;
    allow_messages: boolean;
    numeric_id: number;
    downloads: number;
    meta: {
        index: boolean;
    };
}