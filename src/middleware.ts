import { widthLogging } from "@/middlewares/withLogging";
import { widthIpRestriction } from "@//middlewares/widthIpRestriction";
import withAuth from "@/middlewares/withAuth";

export default widthLogging(widthIpRestriction(withAuth));
