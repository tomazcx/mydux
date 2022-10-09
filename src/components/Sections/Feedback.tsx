import { UserCard } from "../Cards/UserCard"
import user_1 from '../../assets/Users/user-1.jpg'
import user_2 from '../../assets/Users/user-2.jpg'
import user_3 from '../../assets/Users/user-3.jpg'


export const Feedback = () => {
    return (
        <article className="w-10/12 mx-auto flex flex-col lg:mb-32 items-center lg:items-start relative" id="feedback">
            <div className="flex flex-col gap-3">
                <h2 className="title-section">O que eles disseram</h2>
                <p className="text-gray-600 text-normal md:text-xl text-center lg:text-start" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque.</p>
            </div>
            <hr className="hidden lg:block border-4 w-full border-purple-400 absolute top-[370px]" />
            <div className="flex flex-col lg:gap-8 lg:flex-row">
                <UserCard img={user_1} name="Michael M Robinson" order={1} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa. Quisque sit amet sapien metus. Donec ac ante porta, dapibus arcu ut, imperdiet nibh. Vivamus ac pretium eros, ac luctus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi." />
                <UserCard img={user_2} name="Michael M Robinson" order={2} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa. Quisque sit amet sapien metus. Donec ac ante porta, dapibus arcu ut, imperdiet nibh. Vivamus ac pretium eros, ac luctus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi." />
                <UserCard img={user_3} name="Michael M Robinson" order={3} desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit neque. Praesent vestibulum nisi massa. Quisque sit amet sapien metus. Donec ac ante porta, dapibus arcu ut, imperdiet nibh. Vivamus ac pretium eros, ac luctus arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi." />
            </div>
        </article>
    )
}